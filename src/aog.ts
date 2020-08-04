// import { RichSay, Content } from "narratory"

// const getCarousel = () => {
//   return {
//     X: 1,
//   }
// }

// const getContent = (content: Content) => {
//   switch (content.type) {
//     case "carousel":
//       return getCarousel(content as Card)
//     case "list":
//       return getList(content as List)
//     default:
//       return null
//   }
// }

// /**
//  * Adapter for Slack, currently only supporting text
//  */

// // We may need to use pb-util & transform GRPC to JSON??

// export const aogAdapter = ({ messages }: { messages: RichSay[] }) => {
//   return {
//     fulfillmentMessages: messages.map((message) => {
//       return {
//         platform: "slack",
//         payload: {
//           slack: {
//             text: message.text,
//           },
//         },
//       }
//     }),
//   }
// }
