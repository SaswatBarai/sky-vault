# TeleDrive - Complete Folder Structure

```
teledrive/
├── 📄 .gitignore
├── 📄 .env.example
├── 📄 .eslintrc.js
├── 📄 .prettierrc
├── 📄 .dockerignore
├── 📄 package.json
├── 📄 pnpm-workspace.yaml
├── 📄 tsconfig.base.json
├── 📄 turbo.json
├── 📄 docker-compose.yml
├── 📄 docker-compose.dev.yml
├── 📄 docker-compose.prod.yml
├── 📄 Makefile
├── 📄 README.md
│
├── 📁 .github/
│   ├── 📁 workflows/
│   │   ├── 📄 ci.yml
│   │   ├── 📄 cd-staging.yml
│   │   ├── 📄 cd-production.yml
│   │   ├── 📄 security-scan.yml
│   │   └── 📄 dependency-update.yml
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── 📄 bug_report.md
│   │   └── 📄 feature_request.md
│   └── 📄 PULL_REQUEST_TEMPLATE.md
│
├── 📁 .husky/
│   ├── 📄 pre-commit
│   ├── 📄 pre-push
│   └── 📄 commit-msg
│
├── 📁 docs/
│   ├── 📄 README.md
│   ├── 📁 architecture/
│   │   ├── 📄 overview.md
│   │   ├── 📄 microservices.md
│   │   ├── 📄 data-flow.md
│   │   ├── 📄 kafka-events.md
│   │   ├── 📄 websocket-events.md
│   │   └── 📁 diagrams/
│   │       ├── 📄 system-architecture.png
│   │       ├── 📄 data-flow.png
│   │       ├── 📄 kafka-topology.png
│   │       └── 📄 database-schema.png
│   ├── 📁 api/
│   │   ├── 📄 auth-service.md
│   │   ├── 📄 user-service.md
│   │   ├── 📄 file-upload-service.md
│   │   ├── 📄 file-processing-service.md
│   │   ├── 📄 file-metadata-service.md
│   │   ├── 📄 download-service.md
│   │   ├── 📄 video-streaming-service.md
│   │   ├── 📄 preview-service.md
│   │   ├── 📄 notification-service.md
│   │   ├── 📄 storage-manager-service.md
│   │   ├── 📄 activity-log-service.md
│   │   └── 📄 admin-service.md
│   ├── 📁 deployment/
│   │   ├── 📄 local-setup.md
│   │   ├── 📄 docker-guide.md
│   │   ├── 📄 gcp-deployment.md
│   │   ├── 📄 kubernetes-guide.md
│   │   └── 📄 environment-variables.md
│   ├── 📁 development/
│   │   ├── 📄 getting-started.md
│   │   ├── 📄 coding-standards.md
│   │   ├── 📄 testing-guide.md
│   │   ├── 📄 debugging-guide.md
│   │   └── 📄 contributing.md
│   └── 📁 runbooks/
│       ├── 📄 incident-response.md
│       ├── 📄 scaling-procedures.md
│       ├── 📄 backup-restore.md
│       └── 📄 troubleshooting.md
│
├── 📁 packages/
│   │
│   ├── 📁 shared-types/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 entities/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.types.ts
│   │       │   ├── 📄 file.types.ts
│   │       │   ├── 📄 auth.types.ts
│   │       │   ├── 📄 notification.types.ts
│   │       │   ├── 📄 download.types.ts
│   │       │   ├── 📄 streaming.types.ts
│   │       │   ├── 📄 storage.types.ts
│   │       │   └── 📄 admin.types.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base-event.types.ts
│   │       │   ├── 📄 user-events.types.ts
│   │       │   ├── 📄 file-events.types.ts
│   │       │   ├── 📄 processing-events.types.ts
│   │       │   ├── 📄 notification-events.types.ts
│   │       │   ├── 📄 download-events.types.ts
│   │       │   ├── 📄 streaming-events.types.ts
│   │       │   ├── 📄 storage-events.types.ts
│   │       │   └── 📄 admin-events.types.ts
│   │       ├── 📁 api/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 request.types.ts
│   │       │   ├── 📄 response.types.ts
│   │       │   ├── 📄 pagination.types.ts
│   │       │   └── 📄 error.types.ts
│   │       ├── 📁 websocket/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 connection.types.ts
│   │       │   └── 📄 message.types.ts
│   │       ├── 📁 enums/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file-status.enum.ts
│   │       │   ├── 📄 processing-status.enum.ts
│   │       │   ├── 📄 user-role.enum.ts
│   │       │   ├── 📄 notification-type.enum.ts
│   │       │   └── 📄 storage-class.enum.ts
│   │       └── 📁 constants/
│   │           ├── 📄 index.ts
│   │           ├── 📄 kafka-topics.ts
│   │           ├── 📄 websocket-events.ts
│   │           ├── 📄 mime-types.ts
│   │           └── 📄 limits.ts
│   │
│   ├── 📁 shared-utils/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 helpers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 date.helper.ts
│   │       │   ├── 📄 string.helper.ts
│   │       │   ├── 📄 file.helper.ts
│   │       │   ├── 📄 crypto.helper.ts
│   │       │   ├── 📄 validation.helper.ts
│   │       │   └── 📄 url.helper.ts
│   │       ├── 📁 formatters/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 bytes.formatter.ts
│   │       │   ├── 📄 duration.formatter.ts
│   │       │   └── 📄 date.formatter.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file.validator.ts
│   │       │   ├── 📄 email.validator.ts
│   │       │   └── 📄 common.validator.ts
│   │       └── 📁 parsers/
│   │           ├── 📄 index.ts
│   │           ├── 📄 mime.parser.ts
│   │           └── 📄 metadata.parser.ts
│   │
│   ├── 📁 database/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 connection/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 mongodb.connection.ts
│   │       │   └── 📄 connection.config.ts
│   │       ├── 📁 models/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.model.ts
│   │       │   ├── 📄 auth-session.model.ts
│   │       │   ├── 📄 file.model.ts
│   │       │   ├── 📄 processing-job.model.ts
│   │       │   ├── 📄 storage-object.model.ts
│   │       │   ├── 📄 download.model.ts
│   │       │   ├── 📄 playback-session.model.ts
│   │       │   ├── 📄 notification.model.ts
│   │       │   ├── 📄 notification-preference.model.ts
│   │       │   ├── 📄 activity-log.model.ts
│   │       │   ├── 📄 websocket-connection.model.ts
│   │       │   ├── 📄 upload-session.model.ts
│   │       │   ├── 📄 tag.model.ts
│   │       │   ├── 📄 folder.model.ts
│   │       │   ├── 📄 api-key.model.ts
│   │       │   ├── 📄 rate-limit.model.ts
│   │       │   ├── 📄 admin-action.model.ts
│   │       │   └── 📄 preview-cache.model.ts
│   │       ├── 📁 schemas/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.schema.ts
│   │       │   ├── 📄 auth-session.schema.ts
│   │       │   ├── 📄 file.schema.ts
│   │       │   ├── 📄 processing-job.schema.ts
│   │       │   ├── 📄 storage-object.schema.ts
│   │       │   ├── 📄 download.schema.ts
│   │       │   ├── 📄 playback-session.schema.ts
│   │       │   ├── 📄 notification.schema.ts
│   │       │   ├── 📄 notification-preference.schema.ts
│   │       │   ├── 📄 activity-log.schema.ts
│   │       │   ├── 📄 websocket-connection.schema.ts
│   │       │   ├── 📄 upload-session.schema.ts
│   │       │   ├── 📄 tag.schema.ts
│   │       │   ├── 📄 folder.schema.ts
│   │       │   ├── 📄 api-key.schema.ts
│   │       │   ├── 📄 rate-limit.schema.ts
│   │       │   ├── 📄 admin-action.schema.ts
│   │       │   └── 📄 preview-cache.schema.ts
│   │       ├── 📁 repositories/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base.repository.ts
│   │       │   ├── 📄 user.repository.ts
│   │       │   ├── 📄 auth-session.repository.ts
│   │       │   ├── 📄 file.repository.ts
│   │       │   ├── 📄 processing-job.repository.ts
│   │       │   ├── 📄 storage-object.repository.ts
│   │       │   ├── 📄 download.repository.ts
│   │       │   ├── 📄 playback-session.repository.ts
│   │       │   ├── 📄 notification.repository.ts
│   │       │   ├── 📄 activity-log.repository.ts
│   │       │   ├── 📄 websocket-connection.repository.ts
│   │       │   ├── 📄 tag.repository.ts
│   │       │   ├── 📄 folder.repository.ts
│   │       │   └── 📄 admin-action.repository.ts
│   │       ├── 📁 migrations/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 migration-runner.ts
│   │       │   └── 📁 scripts/
│   │       │       ├── 📄 001_initial_setup.ts
│   │       │       ├── 📄 002_create_indexes.ts
│   │       │       └── 📄 003_seed_data.ts
│   │       └── 📁 seeds/
│   │           ├── 📄 index.ts
│   │           ├── 📄 users.seed.ts
│   │           └── 📄 admin.seed.ts
│   │
│   ├── 📁 kafka-client/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 client/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 kafka.client.ts
│   │       │   └── 📄 kafka.config.ts
│   │       ├── 📁 producer/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base.producer.ts
│   │       │   └── 📄 event.producer.ts
│   │       ├── 📁 consumer/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base.consumer.ts
│   │       │   └── 📄 event.consumer.ts
│   │       ├── 📁 topics/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 topic.registry.ts
│   │       │   └── 📄 topic.admin.ts
│   │       └── 📁 serializers/
│   │           ├── 📄 index.ts
│   │           ├── 📄 json.serializer.ts
│   │           └── 📄 avro.serializer.ts
│   │
│   ├── 📁 logger/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 logger.ts
│   │       ├── 📄 logger.config.ts
│   │       ├── 📁 transports/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 console.transport.ts
│   │       │   ├── 📄 file.transport.ts
│   │       │   └── 📄 gcp.transport.ts
│   │       └── 📁 formatters/
│   │           ├── 📄 index.ts
│   │           ├── 📄 json.formatter.ts
│   │           └── 📄 pretty.formatter.ts
│   │
│   ├── 📁 http-client/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 http.client.ts
│   │       ├── 📄 http.config.ts
│   │       ├── 📁 interceptors/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 auth.interceptor.ts
│   │       │   ├── 📄 retry.interceptor.ts
│   │       │   └── 📄 logging.interceptor.ts
│   │       └── 📁 clients/
│   │           ├── 📄 index.ts
│   │           ├── 📄 auth-service.client.ts
│   │           ├── 📄 user-service.client.ts
│   │           ├── 📄 file-service.client.ts
│   │           └── 📄 storage-service.client.ts
│   │
│   ├── 📁 storage-client/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 gcp/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 storage.client.ts
│   │       │   ├── 📄 storage.config.ts
│   │       │   ├── 📄 bucket.manager.ts
│   │       │   └── 📄 signed-url.generator.ts
│   │       └── 📁 interfaces/
│   │           ├── 📄 index.ts
│   │           └── 📄 storage.interface.ts
│   │
│   ├── 📁 telegram-client/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 client/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 telegram.client.ts
│   │       │   └── 📄 telegram.config.ts
│   │       ├── 📁 bot/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 bot.ts
│   │       │   ├── 📄 commands.handler.ts
│   │       │   └── 📄 file.handler.ts
│   │       ├── 📁 auth/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 telegram-auth.validator.ts
│   │       └── 📁 messages/
│   │           ├── 📄 index.ts
│   │           ├── 📄 message.sender.ts
│   │           └── 📄 message.templates.ts
│   │
│   ├── 📁 cache-client/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 redis.client.ts
│   │       ├── 📄 cache.config.ts
│   │       ├── 📁 strategies/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 memory.strategy.ts
│   │       │   └── 📄 redis.strategy.ts
│   │       └── 📁 decorators/
│   │           ├── 📄 index.ts
│   │           └── 📄 cacheable.decorator.ts
│   │
│   ├── 📁 config/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 config.loader.ts
│   │       ├── 📄 config.validator.ts
│   │       ├── 📁 schemas/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.schema.ts
│   │       │   ├── 📄 database.config.schema.ts
│   │       │   ├── 📄 kafka.config.schema.ts
│   │       │   ├── 📄 storage.config.schema.ts
│   │       │   ├── 📄 auth.config.schema.ts
│   │       │   └── 📄 telegram.config.schema.ts
│   │       └── 📁 defaults/
│   │           ├── 📄 index.ts
│   │           └── 📄 default.config.ts
│   │
│   ├── 📁 testing/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📁 fixtures/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.fixtures.ts
│   │       │   ├── 📄 file.fixtures.ts
│   │       │   └── 📄 auth.fixtures.ts
│   │       ├── 📁 mocks/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 kafka.mock.ts
│   │       │   ├── 📄 mongodb.mock.ts
│   │       │   ├── 📄 storage.mock.ts
│   │       │   └── 📄 telegram.mock.ts
│   │       ├── 📁 factories/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.factory.ts
│   │       │   ├── 📄 file.factory.ts
│   │       │   └── 📄 event.factory.ts
│   │       └── 📁 helpers/
│   │           ├── 📄 index.ts
│   │           ├── 📄 test-server.ts
│   │           └── 📄 test-database.ts
│   │
│   └── 📁 eslint-config/
│       ├── 📄 package.json
│       ├── 📄 index.js
│       └── 📄 rules/
│           └── 📄 custom-rules.js
│
├── 📁 services/
│   │
│   ├── 📁 api-gateway/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   ├── 📄 routes.config.ts
│   │       │   └── 📄 services.config.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 v1.routes.ts
│   │       │   ├── 📄 auth.routes.ts
│   │       │   ├── 📄 users.routes.ts
│   │       │   ├── 📄 files.routes.ts
│   │       │   ├── 📄 downloads.routes.ts
│   │       │   ├── 📄 streaming.routes.ts
│   │       │   ├── 📄 notifications.routes.ts
│   │       │   ├── 📄 admin.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 middleware/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 auth.middleware.ts
│   │       │   ├── 📄 rate-limit.middleware.ts
│   │       │   ├── 📄 cors.middleware.ts
│   │       │   ├── 📄 request-logger.middleware.ts
│   │       │   ├── 📄 error-handler.middleware.ts
│   │       │   ├── 📄 validation.middleware.ts
│   │       │   └── 📄 timeout.middleware.ts
│   │       ├── 📁 proxy/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 service.proxy.ts
│   │       │   └── 📄 proxy.config.ts
│   │       ├── 📁 circuit-breaker/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 circuit-breaker.ts
│   │       ├── 📁 health/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 health-check.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 auth.middleware.test.ts
│   │           │   └── 📄 rate-limit.middleware.test.ts
│   │           └── 📁 integration/
│   │               ├── 📄 routes.test.ts
│   │               └── 📄 proxy.test.ts
│   │
│   ├── 📁 auth-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 jwt.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 auth.controller.ts
│   │       │   └── 📄 token.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 auth.service.ts
│   │       │   ├── 📄 token.service.ts
│   │       │   ├── 📄 session.service.ts
│   │       │   └── 📄 telegram-auth.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 auth.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 middleware/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 validate-telegram.middleware.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 login.validator.ts
│   │       │   └── 📄 token.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 login.dto.ts
│   │       │   ├── 📄 token.dto.ts
│   │       │   └── 📄 session.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 auth-events.publisher.ts
│   │       │   └── 📄 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 user-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 auth.service.test.ts
│   │           │   └── 📄 token.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 auth.routes.test.ts
│   │
│   ├── 📁 user-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 app.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.controller.ts
│   │       │   ├── 📄 profile.controller.ts
│   │       │   └── 📄 storage-quota.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.service.ts
│   │       │   ├── 📄 profile.service.ts
│   │       │   └── 📄 storage-quota.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.validator.ts
│   │       │   └── 📄 profile.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 user.dto.ts
│   │       │   └── 📄 profile.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 user-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 file-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 user.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 user.routes.test.ts
│   │
│   ├── 📁 file-upload-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 upload.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 upload.controller.ts
│   │       │   └── 📄 multipart.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 upload.service.ts
│   │       │   ├── 📄 multipart-upload.service.ts
│   │       │   ├── 📄 file-validation.service.ts
│   │       │   └── 📄 checksum.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 upload.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 handlers/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 telegram-file.handler.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 upload.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 upload.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📁 publishers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 file-events.publisher.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 upload.service.test.ts
│   │           │   └── 📄 file-validation.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 upload.routes.test.ts
│   │
│   ├── 📁 file-processing-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 processing.config.ts
│   │       ├── 📁 processors/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base.processor.ts
│   │       │   ├── 📄 image.processor.ts
│   │       │   ├── 📄 video.processor.ts
│   │       │   ├── 📄 document.processor.ts
│   │       │   └── 📄 metadata.processor.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 processing.service.ts
│   │       │   ├── 📄 job-queue.service.ts
│   │       │   ├── 📄 thumbnail.service.ts
│   │       │   ├── 📄 transcoding.service.ts
│   │       │   └── 📄 virus-scan.service.ts
│   │       ├── 📁 workers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 processing.worker.ts
│   │       │   └── 📄 worker.pool.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 processing-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 file-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 image.processor.test.ts
│   │           │   └── 📄 video.processor.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 processing.service.test.ts
│   │
│   ├── 📁 file-metadata-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 app.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file.controller.ts
│   │       │   ├── 📄 search.controller.ts
│   │       │   ├── 📄 tag.controller.ts
│   │       │   └── 📄 folder.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file-metadata.service.ts
│   │       │   ├── 📄 search.service.ts
│   │       │   ├── 📄 tag.service.ts
│   │       │   ├── 📄 folder.service.ts
│   │       │   └── 📄 statistics.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 files.routes.ts
│   │       │   ├── 📄 search.routes.ts
│   │       │   ├── 📄 tags.routes.ts
│   │       │   ├── 📄 folders.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file.validator.ts
│   │       │   ├── 📄 search.validator.ts
│   │       │   └── 📄 folder.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 file.dto.ts
│   │       │   ├── 📄 search.dto.ts
│   │       │   └── 📄 folder.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 metadata-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       ├── 📄 file-events.consumer.ts
│   │       │       └── 📄 processing-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 search.service.test.ts
│   │           │   └── 📄 folder.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 files.routes.test.ts
│   │
│   ├── 📁 download-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 download.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 download.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 download.service.ts
│   │       │   ├── 📄 signed-url.service.ts
│   │       │   └── 📄 download-tracking.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 download.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 download.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 download.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📁 publishers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 download-events.publisher.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 download.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 download.routes.test.ts
│   │
│   ├── 📁 video-streaming-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 streaming.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 streaming.controller.ts
│   │       │   └── 📄 playback.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 streaming.service.ts
│   │       │   ├── 📄 hls.service.ts
│   │       │   ├── 📄 playlist.service.ts
│   │       │   ├── 📄 playback-session.service.ts
│   │       │   └── 📄 adaptive-bitrate.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 streaming.routes.ts
│   │       │   ├── 📄 playback.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 streaming.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 streaming.dto.ts
│   │       │   └── 📄 playback.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 streaming-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 processing-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 hls.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 streaming.routes.test.ts
│   │
│   ├── 📁 preview-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 preview.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 thumbnail.controller.ts
│   │       │   └── 📄 preview.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 preview.service.ts
│   │       │   ├── 📄 thumbnail.service.ts
│   │       │   ├── 📄 cache.service.ts
│   │       │   └── 📄 image-optimization.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 preview.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 preview.validator.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 preview-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       └── 📄 processing-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 preview.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 preview.routes.test.ts
│   │
│   ├── 📁 notification-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 notification.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 notification.controller.ts
│   │       │   └── 📄 preferences.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 notification.service.ts
│   │       │   ├── 📄 telegram-notification.service.ts
│   │       │   ├── 📄 email-notification.service.ts
│   │       │   ├── 📄 preferences.service.ts
│   │       │   └── 📄 template.service.ts
│   │       ├── 📁 channels/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 base.channel.ts
│   │       │   ├── 📄 telegram.channel.ts
│   │       │   ├── 📄 inapp.channel.ts
│   │       │   └── 📄 email.channel.ts
│   │       ├── 📁 templates/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 upload-complete.template.ts
│   │       │   ├── 📄 processing-complete.template.ts
│   │       │   ├── 📄 quota-warning.template.ts
│   │       │   └── 📄 welcome.template.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 notification.routes.ts
│   │       │   ├── 📄 preferences.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 notification.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 notification.dto.ts
│   │       │   └── 📄 preferences.dto.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 notification-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       ├── 📄 file-events.consumer.ts
│   │       │       ├── 📄 processing-events.consumer.ts
│   │       │       ├── 📄 user-events.consumer.ts
│   │       │       └── 📄 download-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 notification.service.test.ts
│   │           │   └── 📄 template.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 notification.routes.test.ts
│   │
│   ├── 📁 websocket-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 websocket.config.ts
│   │       ├── 📁 handlers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 connection.handler.ts
│   │       │   ├── 📄 message.handler.ts
│   │       │   ├── 📄 heartbeat.handler.ts
│   │       │   └── 📄 room.handler.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 websocket.service.ts
│   │       │   ├── 📄 connection-registry.service.ts
│   │       │   ├── 📄 broadcast.service.ts
│   │       │   ├── 📄 room.service.ts
│   │       │   └── 📄 presence.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 auth/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 websocket-auth.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       ├── 📄 file-events.consumer.ts
│   │       │       ├── 📄 processing-events.consumer.ts
│   │       │       ├── 📄 notification-events.consumer.ts
│   │       │       ├── 📄 user-events.consumer.ts
│   │       │       └── 📄 admin-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   ├── 📄 connection.handler.test.ts
│   │           │   └── 📄 broadcast.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 websocket.test.ts
│   │
│   ├── 📁 storage-manager-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 storage.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 storage.controller.ts
│   │       │   └── 📄 lifecycle.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 storage.service.ts
│   │       │   ├── 📄 bucket.service.ts
│   │       │   ├── 📄 lifecycle.service.ts
│   │       │   ├── 📄 archival.service.ts
│   │       │   └── 📄 analytics.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 storage.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 jobs/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 cleanup.job.ts
│   │       │   ├── 📄 archival.job.ts
│   │       │   └── 📄 reconciliation.job.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 storage.validator.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📁 publishers/
│   │       │   │   ├── 📄 index.ts
│   │       │   │   └── 📄 storage-events.publisher.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       ├── 📄 file-events.consumer.ts
│   │       │       └── 📄 user-events.consumer.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 storage.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 storage.routes.test.ts
│   │
│   ├── 📁 activity-log-service/
│   │   ├── 📄 package.json
│   │   ├── 📄 tsconfig.json
│   │   ├── 📄 Dockerfile
│   │   ├── 📄 .env.example
│   │   ├── 📄 jest.config.js
│   │   └── 📁 src/
│   │       ├── 📄 index.ts
│   │       ├── 📄 app.ts
│   │       ├── 📄 server.ts
│   │       ├── 📁 config/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 app.config.ts
│   │       │   └── 📄 logging.config.ts
│   │       ├── 📁 controllers/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 logs.controller.ts
│   │       │   └── 📄 analytics.controller.ts
│   │       ├── 📁 services/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 activity-log.service.ts
│   │       │   ├── 📄 log-search.service.ts
│   │       │   ├── 📄 analytics.service.ts
│   │       │   ├── 📄 retention.service.ts
│   │       │   └── 📄 export.service.ts
│   │       ├── 📁 routes/
│   │       │   ├── 📄 index.ts
│   │       │   ├── 📄 logs.routes.ts
│   │       │   ├── 📄 analytics.routes.ts
│   │       │   └── 📄 health.routes.ts
│   │       ├── 📁 validators/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 logs.validator.ts
│   │       ├── 📁 dto/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 logs.dto.ts
│   │       ├── 📁 jobs/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📄 retention-cleanup.job.ts
│   │       ├── 📁 events/
│   │       │   ├── 📄 index.ts
│   │       │   └── 📁 consumers/
│   │       │       ├── 📄 index.ts
│   │       │       ├── 📄 all-events.consumer.ts
│   │       │       └── 📄 event-router.ts
│   │       └── 📁 __tests__/
│   │           ├── 📁 unit/
│   │           │   └── 📄 activity-log.service.test.ts
│   │           └── 📁 integration/
│   │               └── 📄 logs.routes.test.ts
│   │
│   └── 📁 admin-service/
│       ├── 📄 package.json
│       ├── 📄 tsconfig.json
│       ├── 📄 Dockerfile
│       ├── 📄 .env.example
│       ├── 📄 jest.config.js
│       └── 📁 src/
│           ├── 📄 index.ts
│           ├── 📄 app.ts
│           ├── 📄 server.ts
│           ├── 📁 config/
│           │   ├── 📄 index.ts
│           │   └── 📄 app.config.ts
│           ├── 📁 controllers/
│           │   ├── 📄 index.ts
│           │   ├── 📄 users.controller.ts
│           │   ├── 📄 files.controller.ts
│           │   ├── 📄 system.controller.ts
│           │   ├── 📄 statistics.controller.ts
│           │   └── 📄 config.controller.ts
│           ├── 📁 services/
│           │   ├── 📄 index.ts
│           │   ├── 📄 user-management.service.ts
│           │   ├── 📄 file-moderation.service.ts
│           │   ├── 📄 system.service.ts
│           │   ├── 📄 statistics.service.ts
│           │   ├── 📄 config.service.ts
│           │   └── 📄 bulk-operations.service.ts
│           ├── 📁 routes/
│           │   ├── 📄 index.ts
│           │   ├── 📄 users.routes.ts
│           │   ├── 📄 files.routes.ts
│           │   ├── 📄 system.routes.ts
│           │   ├── 📄 statistics.routes.ts
│           │   ├── 📄 config.routes.ts
│           │   └── 📄 health.routes.ts
│           ├── 📁 middleware/
│           │   ├── 📄 index.ts
│           │   └── 📄 admin-auth.middleware.ts
│           ├── 📁 validators/
│           │   ├── 📄 index.ts
│           │   └── 📄 admin.validator.ts
│           ├── 📁 dto/
│           │   ├── 📄 index.ts
│           │   ├── 📄 user-management.dto.ts
│           │   └── 📄 statistics.dto.ts
│           ├── 📁 events/
│           │   ├── 📄 index.ts
│           │   ├── 📁 publishers/
│           │   │   ├── 📄 index.ts
│           │   │   └── 📄 admin-events.publisher.ts
│           │   └── 📁 consumers/
│           │       ├── 📄 index.ts
│           │       └── 📄 system-events.consumer.ts
│           └── 📁 __tests__/
│               ├── 📁 unit/
│               │   └── 📄 user-management.service.test.ts
│               └── 📁 integration/
│                   └── 📄 admin.routes.test.ts
│
├── 📁 apps/
│   │
│   └── 📁 web/
│       ├── 📄 package.json
│       ├── 📄 tsconfig.json
│       ├── 📄 next.config.js
│       ├── 📄 tailwind.config.js
│       ├── 📄 postcss.config.js
│       ├── 📄 .env.example
│       ├── 📄 .env.local.example
│       ├── 📁 public/
│       │   ├── 📁 images/
│       │   │   ├── 📄 logo.svg
│       │   │   ├── 📄 favicon.ico
│       │   │   └── 📄 og-image.png
│       │   └── 📁 fonts/
│       │       └── 📄 .gitkeep
│       ├── 📁 src/
│       │   ├── 📁 app/
│       │   │   ├── 📄 layout.tsx
│       │   │   ├── 📄 page.tsx
│       │   │   ├── 📄 loading.tsx
│       │   │   ├── 📄 error.tsx
│       │   │   ├── 📄 not-found.tsx
│       │   │   ├── 📄 globals.css
│       │   │   ├── 📁 (auth)/
│       │   │   │   ├── 📄 layout.tsx
│       │   │   │   ├── 📁 login/
│       │   │   │   │   └── 📄 page.tsx
│       │   │   │   ├── 📁 callback/
│       │   │   │   │   └── 📄 page.tsx
│       │   │   │   └── 📁 logout/
│       │   │   │       └── 📄 page.tsx
│       │   │   ├── 📁 (dashboard)/
│       │   │   │   ├── 📄 layout.tsx
│       │   │   │   ├── 📁 dashboard/
│       │   │   │   │   └── 📄 page.tsx
│       │   │   │   ├── 📁 files/
│       │   │   │   │   ├── 📄 page.tsx
│       │   │   │   │   ├── 📁 [fileId]/
│       │   │   │   │   │   └── 📄 page.tsx
│       │   │   │   │   └── 📁 folder/
│       │   │   │   │       └── 📁 [folderId]/
│       │   │   │   │           └── 📄 page.tsx
│       │   │   │   ├── 📁 upload/
│       │   │   │   │   └── 📄 page.tsx
│       │   │   │   ├── 📁 stream/
│       │   │   │   │   └── 📁 [fileId]/
│       │   │   │   │       └── 📄 page.tsx
│       │   │   │   ├── 📁 gallery/
│       │   │   │   │   └── 📄 page.tsx
│       │   │   │   ├── 📁 settings/
│       │   │   │   │   ├── 📄 page.tsx
│       │   │   │   │   ├── 📁 profile/
│       │   │   │   │   │   └── 📄 page.tsx
│       │   │   │   │   ├── 📁 notifications/
│       │   │   │   │   │   └── 📄 page.tsx
│       │   │   │   │   └── 📁 storage/
│       │   │   │   │       └── 📄 page.tsx
│       │   │   │   └── 📁 notifications/
│       │   │   │       └── 📄 page.tsx
│       │   │   ├── 📁 (admin)/
│       │   │   │   ├── 📄 layout.tsx
│       │   │   │   └── 📁 admin/
│       │   │   │       ├── 📄 page.tsx
│       │   │   │       ├── 📁 users/
│       │   │   │       │   ├── 📄 page.tsx
│       │   │   │       │   └── 📁 [userId]/
│       │   │   │       │       └── 📄 page.tsx
│       │   │   │       ├── 📁 files/
│       │   │   │       │   └── 📄 page.tsx
│       │   │   │       ├── 📁 system/
│       │   │   │       │   └── 📄 page.tsx
│       │   │   │       └── 📁 logs/
│       │   │   │           └── 📄 page.tsx
│       │   │   └── 📁 api/
│       │   │       ├── 📁 auth/
│       │   │       │   └── 📁 [...nextauth]/
│       │   │       │       └── 📄 route.ts
│       │   │       └── 📁 health/
│       │   │           └── 📄 route.ts
│       │   ├── 📁 components/
│       │   │   ├── 📁 ui/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 button.tsx
│       │   │   │   ├── 📄 input.tsx
│       │   │   │   ├── 📄 card.tsx
│       │   │   │   ├── 📄 modal.tsx
│       │   │   │   ├── 📄 dropdown.tsx
│       │   │   │   ├── 📄 toast.tsx
│       │   │   │   ├── 📄 skeleton.tsx
│       │   │   │   ├── 📄 progress.tsx
│       │   │   │   ├── 📄 avatar.tsx
│       │   │   │   ├── 📄 badge.tsx
│       │   │   │   └── 📄 tooltip.tsx
│       │   │   ├── 📁 layout/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 header.tsx
│       │   │   │   ├── 📄 sidebar.tsx
│       │   │   │   ├── 📄 footer.tsx
│       │   │   │   ├── 📄 navigation.tsx
│       │   │   │   └── 📄 breadcrumb.tsx
│       │   │   ├── 📁 auth/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 telegram-login-button.tsx
│       │   │   │   ├── 📄 auth-guard.tsx
│       │   │   │   └── 📄 admin-guard.tsx
│       │   │   ├── 📁 files/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 file-list.tsx
│       │   │   │   ├── 📄 file-card.tsx
│       │   │   │   ├── 📄 file-grid.tsx
│       │   │   │   ├── 📄 file-preview.tsx
│       │   │   │   ├── 📄 file-details.tsx
│       │   │   │   ├── 📄 file-actions.tsx
│       │   │   │   ├── 📄 folder-tree.tsx
│       │   │   │   └── 📄 search-bar.tsx
│       │   │   ├── 📁 upload/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 upload-zone.tsx
│       │   │   │   ├── 📄 upload-progress.tsx
│       │   │   │   └── 📄 upload-list.tsx
│       │   │   ├── 📁 streaming/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 video-player.tsx
│       │   │   │   ├── 📄 player-controls.tsx
│       │   │   │   └── 📄 quality-selector.tsx
│       │   │   ├── 📁 gallery/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 image-gallery.tsx
│       │   │   │   ├── 📄 image-viewer.tsx
│       │   │   │   └── 📄 lightbox.tsx
│       │   │   ├── 📁 notifications/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 notification-bell.tsx
│       │   │   │   ├── 📄 notification-list.tsx
│       │   │   │   └── 📄 notification-item.tsx
│       │   │   ├── 📁 dashboard/
│       │   │   │   ├── 📄 index.ts
│       │   │   │   ├── 📄 storage-meter.tsx
│       │   │   │   ├── 📄 recent-files.tsx
│       │   │   │   ├── 📄 activity-feed.tsx
│       │   │   │   └── 📄 stats-card.tsx
│       │   │   └── 📁 admin/
│       │   │       ├── 📄 index.ts
│       │   │       ├── 📄 user-table.tsx
│       │   │       ├── 📄 system-health.tsx
│       │   │       ├── 📄 metrics-chart.tsx
│       │   │       └── 📄 log-viewer.tsx
│       │   ├── 📁 hooks/
│       │   │   ├── 📄 index.ts
│       │   │   ├── 📄 use-auth.ts
│       │   │   ├── 📄 use-files.ts
│       │   │   ├── 📄 use-upload.ts
│       │   │   ├── 📄 use-notifications.ts
│       │   │   ├── 📄 use-websocket.ts
│       │   │   ├── 📄 use-streaming.ts
│       │   │   ├── 📄 use-storage.ts
│       │   │   ├── 📄 use-search.ts
│       │   │   └── 📄 use-infinite-scroll.ts
│       │   ├── 📁 lib/
│       │   │   ├── 📄 index.ts
│       │   │   ├── 📄 api-client.ts
│       │   │   ├── 📄 websocket-client.ts
│       │   │   ├── 📄 auth.ts
│       │   │   ├── 📄 utils.ts
│       │   │   └── 📄 constants.ts
│       │   ├── 📁 store/
│       │   │   ├── 📄 index.ts
│       │   │   ├── 📄 auth.store.ts
│       │   │   ├── 📄 files.store.ts
│       │   │   ├── 📄 upload.store.ts
│       │   │   ├── 📄 notifications.store.ts
│       │   │   └── 📄 ui.store.ts
│       │   ├── 📁 types/
│       │   │   ├── 📄 index.ts
│       │   │   ├── 📄 auth.types.ts
│       │   │   ├── 📄 file.types.ts
│       │   │   └── 📄 api.types.ts
│       │   └── 📁 styles/
│       │       └── 📄 themes.css
│       └── 📁 __tests__/
│           ├── 📁 components/
│           │   └── 📄 file-list.test.tsx
│           ├── 📁 hooks/
│           │   └── 📄 use-auth.test.ts
│           └── 📁 e2e/
│               ├── 📄 auth.spec.ts
│               ├── 📄 upload.spec.ts
│               └── 📄 files.spec.ts
│
├── 📁 infrastructure/
│   │
│   ├── 📁 docker/
│   │   ├── 📁 base/
│   │   │   ├── 📄 Dockerfile.node
│   │   │   └── 📄 Dockerfile.node-alpine
│   │   ├── 📁 development/
│   │   │   ├── 📄 Dockerfile.dev
│   │   │   └── 📄 docker-compose.dev.yml
│   │   └── 📁 production/
│   │       ├── 📄 Dockerfile.prod
│   │       └── 📄 docker-compose.prod.yml
│   │
│   ├── 📁 kubernetes/
│   │   ├── 📁 base/
│   │   │   ├── 📄 namespace.yaml
│   │   │   ├── 📄 configmap.yaml
│   │   │   └── 📄 secrets.yaml
│   │   ├── 📁 services/
│   │   │   ├── 📁 api-gateway/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   ├── 📄 hpa.yaml
│   │   │   │   └── 📄 ingress.yaml
│   │   │   ├── 📁 auth-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 user-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 file-upload-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 file-processing-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 file-metadata-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 download-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 video-streaming-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 preview-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 notification-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 websocket-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 storage-manager-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   ├── 📁 activity-log-service/
│   │   │   │   ├── 📄 deployment.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 hpa.yaml
│   │   │   └── 📁 admin-service/
│   │   │       ├── 📄 deployment.yaml
│   │   │       ├── 📄 service.yaml
│   │   │       └── 📄 hpa.yaml
│   │   ├── 📁 infrastructure/
│   │   │   ├── 📁 mongodb/
│   │   │   │   ├── 📄 statefulset.yaml
│   │   │   │   ├── 📄 service.yaml
│   │   │   │   └── 📄 pvc.yaml
│   │   │   ├── 📁 kafka/
│   │   │   │   ├── 📄 zookeeper.yaml
│   │   │   │   ├── 📄 kafka.yaml
│   │   │   │   └── 📄 topics.yaml
│   │   │   └── 📁 redis/
│   │   │       ├── 📄 deployment.yaml
│   │   │       └── 📄 service.yaml
│   │   └── 📁 overlays/
│   │       ├── 📁 development/
│   │       │   └── 📄 kustomization.yaml
│   │       ├── 📁 staging/
│   │       │   └── 📄 kustomization.yaml
│   │       └── 📁 production/
│   │           └── 📄 kustomization.yaml
│   │
│   ├── 📁 terraform/
│   │   ├── 📁 modules/
│   │   │   ├── 📁 gcp-project/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   └── 📄 outputs.tf
│   │   │   ├── 📁 cloud-run/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   └── 📄 outputs.tf
│   │   │   ├── 📁 cloud-storage/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   └── 📄 outputs.tf
│   │   │   ├── 📁 vpc/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   └── 📄 outputs.tf
│   │   │   ├── 📁 load-balancer/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   └── 📄 outputs.tf
│   │   │   └── 📁 monitoring/
│   │   │       ├── 📄 main.tf
│   │   │       ├── 📄 variables.tf
│   │   │       └── 📄 outputs.tf
│   │   ├── 📁 environments/
│   │   │   ├── 📁 development/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   ├── 📄 terraform.tfvars
│   │   │   │   └── 📄 backend.tf
│   │   │   ├── 📁 staging/
│   │   │   │   ├── 📄 main.tf
│   │   │   │   ├── 📄 variables.tf
│   │   │   │   ├── 📄 terraform.tfvars
│   │   │   │   └── 📄 backend.tf
│   │   │   └── 📁 production/
│   │   │       ├── 📄 main.tf
│   │   │       ├── 📄 variables.tf
│   │   │       ├── 📄 terraform.tfvars
│   │   │       └── 📄 backend.tf
│   │   └── 📄 README.md
│   │
│   └── 📁 scripts/
│       ├── 📄 setup-local.sh
│       ├── 📄 setup-kafka-topics.sh
│       ├── 📄 run-migrations.sh
│       ├── 📄 seed-database.sh
│       ├── 📄 build-all.sh
│       ├── 📄 deploy.sh
│       └── 📄 healthcheck.sh
│
├── 📁 scripts/
│   ├── 📄 generate-service.ts
│   ├── 📄 generate-types.ts
│   ├── 📄 validate-env.ts
│   ├── 📄 start-dev.ts
│   └── 📄 cleanup.ts
│
└── 📁 tools/
    ├── 📁 generators/
    │   ├── 📄 service-generator.ts
    │   ├── 📄 controller-generator.ts
    │   └── 📄 model-generator.ts
    └── 📁 cli/
        ├── 📄 index.ts
        └── 📄 commands/
            ├── 📄 create-service.ts
            └── 📄 create-event.ts
```

---

## Key Configuration Files

### Root `package.json`
```json
{
  "name": "teledrive",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*",
    "services/*",
    "apps/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down",
    "db:migrate": "pnpm --filter @teledrive/database run migrate",
    "db:seed": "pnpm --filter @teledrive/database run seed"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  }
}
```

### `pnpm-workspace.yaml`
```yaml
packages:
  - 'packages/*'
  - 'services/*'
  - 'apps/*'
```

### `turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"]
    },
    "lint": {},
    "clean": {
      "cache": false
    }
  }
}
```

### `tsconfig.base.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@teledrive/shared-types": ["./packages/shared-types/src"],
      "@teledrive/shared-utils": ["./packages/shared-utils/src"],
      "@teledrive/database": ["./packages/database/src"],
      "@teledrive/kafka-client": ["./packages/kafka-client/src"],
      "@teledrive/logger": ["./packages/logger/src"],
      "@teledrive/config": ["./packages/config/src"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Services** | kebab-case | `file-upload-service` |
| **Packages** | kebab-case | `shared-types` |
| **Files** | kebab-case | `user.controller.ts` |
| **Classes** | PascalCase | `UserController` |
| **Interfaces** | PascalCase with I prefix | `IUserService` |
| **Types** | PascalCase | `UserResponse` |
| **Functions** | camelCase | `getUserById` |
| **Constants** | UPPER_SNAKE_CASE | `MAX_FILE_SIZE` |
| **Env Variables** | UPPER_SNAKE_CASE | `DATABASE_URL` |
| **Kafka Topics** | dot.separated | `file.uploaded` |
| **MongoDB Collections** | snake_case plural | `activity_logs` |