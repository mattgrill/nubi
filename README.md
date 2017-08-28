# Nubi

```javascript
const Nubi = require('nubi');
const nubi = new Nubi(
  '{USERNAME}', // YOUR USERNAME
  '{PASSWORD}', // YOUR PASSWORD
);

nubi.api.tasks.listTasks({ site: '{MYSITE}' })
  .then(console.log)
  .catch(console.log)
```

## Documentation

All methods accept a single object as an argument with the `parameters` as `keys`. These are used for replacements in template strings.

### api.tasks

- #### `listTasks`
  List a site's tasks.

  **Parameters:**
  - `site` - The site name.

- #### `taskRecord`
  Get a task record.

  **Parameters:**
  - `site` - The site name.
  - `task` - The task id.

### api.servers

- #### `listEnvironmentServers`
  List a site environment's servers.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `getServerRecord`
  Get a server record.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `server` - The server name.

- #### `getServerMaxPHPProcesses`
  Calculate a server's PHP max processes record.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `server` - The server name.

### api.domains

- #### `deleteDomain`
  Delete a domain.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `domain` - The domain name to delete.

- #### `purgeVarnishForDomain`
  Purge the Varnish cache for a domain.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `domain` - The domain name to purge.

- #### `listEnvironmentServers`
  List an environment's domains.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `getDomainRecord`
  Get a domain record.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `domain` - The domain name.

- #### `addDomain`
  Add a domain name.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `domain` - The domain name to add.

### api.workflow

- #### `deployCode`
  Deploy code from one site environment to another.

  **Parameters:**
  - `site` - The site name.
  - `source` - The source environment name.
  - `target` - The target environment name.

- #### `copyDatabase`
  Copy a database from one site environment to another.

  **Parameters:**
  - `site` - The site name.
  - `db` - The database name.
  - `source` - The source environment name.
  - `target` - The target environment name.

- #### `moveDomains`
  Move domain(s) from one site environment to another.

  **Parameters:**
  - `site` - The site name.
  - `source` - The source environment name.
  - `target` - The target environment name.

- #### `deployVCSBranch`
  Deploy a specific VCS branch or tag to an environment.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `copyFiles`
  Copy files from one site environment to another.

  **Parameters:**
  - `site` - The site name.
  - `source` - The source environment name.
  - `target` - The target environment name.

### api.databse

- #### `deleteDatabse`
  Delete a database.

  **Parameters:**
  - `site` - The site name.
  - `db` - The database name.

- #### `deleteDatabaseBackup`
  Delete a site environment database instance backup.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.
  - `backup` - The backup id.

- #### `listDatabases`
  List a site's databases.

  **Parameters:**
  - `site` - The site name.

- #### `getDatabaseRecord`
  Get a database record.

  **Parameters:**
  - `site` - The site name.
  - `db` - The database name.

- #### `listEnvironmentDatabaseInstances`
  List a site environment's database instances.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `getDatabaseInstance`
  Get a database instance.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.

- #### `getDatabaseInstanceBackups`
  List a site environment's database instance backups.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.

- #### `getDatabaseInstanceBackupDetails`
  Get details about a database instance backup.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.
  - `backup` - The backup id.

- #### `downloadDatabaseInstanceBackup`
  Download a database instance backup from server.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.
  - `backup` - The backup id.

- #### `addDatabase`
  Add a database.

  **Parameters:**
  - `site` - The site name.

- #### `createDatabaseInstanceBackup`
  Create a database instance backup.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.

- #### `restoreEnvironmentDatabaseBackup`
  Restore a site environment database instance backup.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `db` - The database name.
  - `backup` - The backup id.

### api.sites

- #### `getSites`
  List all sites accessible by the caller.

- #### `getSiteRecord`
  Get a site record.

  **Parameters:**
  - `site` - The site name.

- #### `listSiteEnvironments`
  Get an environment record.

  **Parameters:**
  - `site` - The site name.

- #### `getEnvironmentRecord`
  Get an environment record.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `getLogStreamCommand`
  Retrieve an authenticated command to stream log files for an environment.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.

- #### `installDrupal`
  Install a Drupal distro or Drush Make file into an environment.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `type` - The `distro_url` or `make_url`.

- #### `configureLiveDevelopment`
  Configure Live Development on an environment.

  **Parameters:**
  - `site` - The site name.
  - `env` - The environment name.
  - `action` - Valid options are `enable` or `disable`.
