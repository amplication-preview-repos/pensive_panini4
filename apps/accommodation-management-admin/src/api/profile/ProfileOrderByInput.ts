import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  bio?: SortOrder;
  profilePicture?: SortOrder;
  userId?: SortOrder;
  surname?: SortOrder;
  age?: SortOrder;
  requestedRoomType?: SortOrder;
  name?: SortOrder;
  institution?: SortOrder;
};
