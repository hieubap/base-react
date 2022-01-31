import CustomScrollbar from "core/components/CustomScrollbar";
import React from "react";
import { notifications } from "./data";
import NotificationItem from "./NotificationItem";

const AppNotification = () => {
  return (
    <>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Notifications</h3>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbar className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </ul>
      </CustomScrollbar>
    </>
  );
};

export default AppNotification;
