# Changelog
## All notable changes to this project will be documented below

## Version 2

### 2.2.0 (April 28, 2025)
#### New Features
- Configuration: By default configuration is now saved in state. Optionally select to store configuration to localStorage
- Content types: Dependencies are identified between types for Link field types. Improved error handling during failures by listing failed content types and a reason.
- Export & Import: Add support for modifiedAfter parameter for delta exports. Display errors during export operations.

#### Bug Fixes
- Channels: When a project without channels is selected display an according message
- Export & Import: Decouple source/target configurations for Export & Import and add assistive notes


### 2.1.0 (January 2, 2025)
#### New Features
- Added ability to copy a Project between environments, except for channel configuration changes and content type changes

### 2.0.0 (June 14, 2024)
#### Major Updates
- Upgraded app to NextJS v14
- Upgraded to NodeJS v20
- Pages Copy Page has been rebuilt

#### New Features
- Translations: Ability to link existing content documents as translated documents
- Configuration Drawer added to header

#### Bug Fixes
- Error when adding multiple channels to a developer project

---

## Version 1

### 1.4.0 (March 4, 2024)
- Added Batch Import Functionality

### 1.3.1 (February 26, 2024)
- Fix Batch Export

### 1.3.0 (December 13, 2023)
- Replaced existing API functions with [bloomreach-content-management-apis](https://www.npmjs.com/package/bloomreach-content-management-apis) library

### 1.2.1-beta (September 11, 2023)
- Fixed issue with Content Types DataGrid not rendering

### 1.2.0-beta (August 15, 2023)
- Added ability to copy content types, along with logic to determine dependencies of content types to be copied

### 1.1.0-beta (June 15, 2023)
- Added ability to delete Routes
- Added ability to delete Menus

### 1.0.1-beta (June 5, 2023)
- Added ability to Reopen, Rebase, Merge, and Delete Projects

### 1.0.0-beta (June 2, 2023)
- Set the project to Beta status
- Upgraded NextJS to version 13
- Upgraded React to version 18

### 0.2.1-alpha (May 30, 2023)
- Finished layouts tab in channel configuration

### 0.2.0-alpha (May 17, 2023)
#### New features
- Added ability to delete content types
- Added ability to modify channel settings
- Added ability to add/modify/delete channel properties
#### Bugs
- When copying components, added a check for the component group. If the component group doesn't exist, it will be created

### 0.1.2-alpha (April 20, 2023)
- Added ability to delete component groups
- Added ability to create new component groups

### 0.1.1-alpha (April 18, 2023)
- Fixed bug with links in Projects list
- Added ability to modify channel details
- Added loading icon to modal buttons when processing requests
- Added TODO annotations for future development tasks

### 0.1.0-alpha (March 31, 2023)
- Update page title to reflect the name of the page
- Added GETTING-STARTED.md into the application at /getting-started
- Added CONTRIBUTING.md into the application at /contributing

### March 30, 2023
- Add release notes from CHANGELOG.md into the application at /release-notes
