import { Request, Response, NextFunction } from 'express';
import { ZodType, ZodError } from 'zod';

export const validate = (schema: ZodType) => 
  (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validates body, query, and params against the schema
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const details = error.issues.map((issue) => {
                const field = issue.path.map(String).join('.');
                return { field, message: issue.message, code: issue.code };
            });
            const fields = details.reduce<Record<string, string>>((acc, { field, message }) => {
                if (!(field in acc)) acc[field] = message;
                return acc;
            }, {});
            const summary = details.length === 1
                ? details[0]!.message
                : `${details.length} validation error${details.length > 1 ? 's' : ''}. Please check the fields and try again.`;
            return res.status(400).json({
                error: 'Validation Error',
                message: summary,
                details,
                fields,
            });
        }
        next(error);
    }
};