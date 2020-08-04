import * as test from "tape"

// >> Samples
import {
  narratory_payload_suggestions,
  //   narratory_payload_list,
  //   narratory_carousel,
  //   narratory_list,
  //   narratory_card,
  //   narratory_button,
  //   narratory_image,
} from "./narratory_samples"

// >> Adapters
// import { dialogflowmessengerAdapter } from "./../src/df_messenger"
// import { suggestions } from "./../src/df_messenger"

test("setup", function (t: any) {
  t.end()
})

test("<Suggestions>", async (t: any) => {
  const res = "x"
  const expected = narratory_payload_suggestions
  const actual = res
  t.deepEqual(actual, expected)
})

test("teardown", function (t: any) {
  // ...
  t.end()
})
