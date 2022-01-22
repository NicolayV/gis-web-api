import NoteIcon from "@mui/icons-material/Note";
import PieChartIcon from "@mui/icons-material/PieChart";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

export const mainDrawerItems = [
  {
    id: 0,
    icon: <NoteIcon />,
    label: "Мои поля",
    route: "route",
  },
  {
    id: 1,
    icon: <PieChartIcon />,
    label: "Диагностика",
    route: "route",
  },
  {
    id: 2,
    icon: <OpenWithIcon />,
    label: "Рекомендации",
    route: "route",
  },
  {
    id: 3,
    icon: <ReceiptIcon />,
    label: "Заметки",
    route: "route",
  },
];
export const settingsDrawerItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Профиль",
    route: "route",
  },
  {
    id: 1,
    icon: <NotificationsNoneIcon />,
    label: "Уведомления",
    route: "route",
  },
  {
    id: 2,
    icon: <SettingsIcon />,
    label: "Настройки",
    route: "route",
  },
];
