import { VideoCall as TVideoCall } from "../api/videoCall/VideoCall";

export const VIDEOCALL_TITLE_FIELD = "id";

export const VideoCallTitle = (record: TVideoCall): string => {
  return record.id?.toString() || String(record.id);
};
