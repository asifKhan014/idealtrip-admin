// utils/signalRService.js
import * as signalR from "@microsoft/signalr";

let connection = null;

export const startSignalRConnection = async (onReceiveNotification) => {
  const token = localStorage.getItem("token");
  
  connection = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notificationHub`, {
      accessTokenFactory: () => token,
    })
    .withAutomaticReconnect()
    .build();

  connection.on("ReceiveNotification", onReceiveNotification);

  try {
    await connection.start();
    console.log("SignalR Connected.");
  } catch (err) {
    console.error("SignalR Connection Error:", err);
    setTimeout(() => startSignalRConnection(onReceiveNotification), 5000); // Retry after 5s
  }
};

export const stopSignalRConnection = async () => {
  if (connection) {
    await connection.stop();
    console.log("SignalR Disconnected.");
  }
};
