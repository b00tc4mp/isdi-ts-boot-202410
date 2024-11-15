/*Discriminated union (unión discriminada) en TypeScript es un patrón que
 permite manejar tipos de unión de manera segura y eficiente. Consiste en:

Tipos de unión: Tipos que pueden ser uno de varios tipos posibles.
Propiedad discriminante: Una propiedad común a todos los tipos en la unión,
con valores literales únicos que identifican el tipo específico.
Este patrón facilita al compilador el estrechamiento de tipos (type narrowing)
al distinguir claramente entre los diferentes tipos en una unión, basándose
en el valor de la propiedad discriminante. */

//Example .1

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

//Creamos nuestro Union type
type Figure = Square | Rectangle;

const calculateArea = (figure: Figure): number => {
  if (figure.kind === "rectangle") {
    return figure.height * figure.width;
  }

  return figure.side ** 2;
};

const squareArea = calculateArea({ side: 12, kind: "square" });

console.log("squareArea :>> ", squareArea);

//Example .2
//Supongamos que tenemos diferentes tipos de notificaciones:

type EmailNotification = {
  kind: "email";
  recipient: string;
  subject: string;
};

type SmsNotification = {
  kind: "sms";
  phoneNumber: number;
  message: string;
};

type PushNotification = {
  kind: "push";
  deviceId: string;
  title: string;
};

type Notification = EmailNotification | SmsNotification | PushNotification;

const sendNotification = (notification: Notification): string => {
  let result = "";

  switch (notification.kind) {
    case "email":
      result += `Sending email to: ${notification.recipient} with the subject: ${notification.subject}`;
      break;
    case "sms":
      result += `Sending SMS to ${notification.phoneNumber}: ${notification.message}`;
      break;
    case "push":
      result += `Sending push notification ${notification.deviceId} with title: ${notification.title}`;
      break;
  }

  return result;
};

const smsNotification = sendNotification({
  kind: "sms",
  phoneNumber: 4244242342,
  message: "sending love",
});

const emailNotification = sendNotification({
  kind: "email",
  subject: "This email will blow your mind!",
  recipient: "sor@prendente.com",
});

console.log("sms :>> ", smsNotification);
console.log("email :>> ", emailNotification);
