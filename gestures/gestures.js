const { GestureDescription, Finger, FingerDirection } = window.fp;

const botGesture = new GestureDescription('abajo'); // 👇
const topGesture = new GestureDescription('arriba'); // 👆
const rightGesture = new GestureDescription('derecha'); // 👉
const leftGesture = new GestureDescription('izquierda') //👈

topGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

botGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

rightGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

leftGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);


const gestures = [
  botGesture, topGesture, leftGesture, rightGesture
]

export {
  gestures
}