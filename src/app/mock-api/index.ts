import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { UserMockApi } from 'app/mock-api/common/user/api';
import { ProjectMockApi } from 'app/mock-api/dashboards/project/api';
import { IconsMockApi } from 'app/mock-api/ui/icons/api';

export const mockApiServices = [
    AuthMockApi,
    IconsMockApi,
    MessagesMockApi,
    NavigationMockApi,
    NotificationsMockApi,
    ProjectMockApi,
    ShortcutsMockApi,
    UserMockApi,
];
