interface AppConfigurationState {
  environments: {
    source: {
      environment: string;
      xAuthToken: string;
      projectId: string;
    };
    target: {
      environment: string;
      xAuthToken: string;
      projectId: string;
    };
  }
}

interface ConfigurationContext {
  appConfiguration: AppConfiguration;
  setAppConfiguration: (appConfiguration: AppConfiguration) => void;
  storeApplicationConfiguration: (appConfiguration: AppConfiguration) => void;
}

interface LoadingState {
  loading: boolean;
  message: string;
}

interface LoadingContext {
  loading: LoadingState;
  setLoading: (loading: LoadingState) => void;
}

interface SidebarContext {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

interface ErrorContextProps {
  snackPack: any[];
  setSnackPack: (snackPack: any[]) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  messageInfo: any;
  setMessageInfo: (messageInfo: any) => void;
  messageSeverity: AlertColor;
  setMessageSeverity: (messageSeverity: AlertColor) => void;
  handleShowSnackbar: (severity: AlertColor, message: string) => void;
}

interface DeveloperProjectProps {
  id?: string;
  name: string;
  includeContentTypes?: boolean;
  description?: string;
  state: ProjectState;
  items: ProjectItems;
  system: ProjectSystem;
}


enum ProjectStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  ADDING_CHANNEL = 'ADDING_CHANNEL',
  REBASING = 'REBASING',
  REBASE_ERROR = 'REBASE_ERROR',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  MERGING = 'MERGING',
  MERGED = 'MERGED',
  MERGE_ERROR = 'MERGE_ERROR',
  DELETED = 'DELETED',
  DELETING = 'DELETING',
  RUNNING = 'RUNNING',
  START_RUNNING = 'START_RUNNING',
  STOP_RUNNING = 'STOP_RUNNING',
}

interface ProjectError {
  target?: string;
  message?: string;
}
interface ProjectErrors {
  channels?: ProjectError[];
  contentTypes?: ProjectError[];
  documents?: ProjectError[];
  pages?: ProjectError[];
  resourceBundles?: ProjectError[];
}

interface ProjectState {
  status?: ProjectStatus;
  message?: string;
  errors?: ProjectErrors;
  availableActions?: string[];
}

interface ProjectItems {
  channels?: ProjectChannel[];
  contentTypes?: ProjectContentType[];
  documents?: ProjectContent[];
  pages?: ProjectContent[];
  resourceBundles?: ProjectContent[];
}

interface ProjectChannel {
  id?: string;
  displayName?: string;
}

interface ProjectContentType {
  name?: string;
  displayName?: string;
}

interface ProjectContent {
  path?: string;
  displayName?: string;
}

interface ProjectSystem {
  createdBy?: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  mergedBy?: string;
  mergedAt?: string;
}
