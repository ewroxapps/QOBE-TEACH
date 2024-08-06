export interface AttendanceViewProps{
    data:AttendanceViewList
    setFetch: (visible: boolean) => void;
    permission:PermissionList[]
}