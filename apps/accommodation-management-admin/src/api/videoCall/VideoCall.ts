export type VideoCall = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  callEnd: Date | null;
  callStart: Date | null;
};
