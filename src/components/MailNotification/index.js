import React from "react";
import NotificationItem from "./NotificationItem";
import {notifications} from "./data";
import CustomScrollbar from "core/components/CustomScrollbar";
// import CustomScrollbars from '../../../util/CustomScrollbars'

const MailNotification = () => {
  return (
    <>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Messages</h3>
        <i className="gx-icon-btn icon icon-charvlet-down"/>
      </div>
      <CustomScrollbar className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => <NotificationItem key={index}
                                                                        notification={notification}/>)}
        </ul>
      </CustomScrollbar>
    </>
  )
};

export default MailNotification;

