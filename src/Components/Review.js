import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  TextArea,
  VStack,
} from "native-base";
import { Colors } from "../Color";
import Message from "./Notification/Message";

const Review = () => {
  const [rating, setRating] = useState("");
  const handelSubmitComment= ()=>{
    alert("aaa")
  }
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Đánh giá
      </Heading>

      {/* không có review  */}
      {/* <Message
        mt={3}
        color={Colors.green}
        bg={Colors.backgroundDark}
        size={10}
        bold
        children={"Không có đánh giá nào"}
      /> */}
      {/* có  review  */}
      <Box p={5} bg={Colors.green} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black} p={1}>
          Truowjngf dz
        </Heading>
        <Text my={3} fontSize={11} p={1}>
          jan 12 2022
        </Text>
        <Message
          bold
          mt={3}
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "A caveat is that videos must use absolute positioning instead of flexGrow, since size info is not currently passed for non-image assets. This limitation doesn't occur for videos that are linked directly into Xcode or the Assets folder for Android."
          }
        />
      </Box>
      {/* viết đánh giá  */}
      <Box mt={6}>
        <Heading fontSize={15} color={Colors.black} bm={5} bold>
          Đánh giá sao
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label>Đánh giá</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              py={4}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
                // justifyContent:"center",
                // alignItems:"center"
              }}
              mt="1"
              value={rating}
              onValueChange={(e) => setRating(e)}
              selectedValue={rating}
            >
              <Select.Item label="1-Rất tệ" value="1" />
              <Select.Item label="2-Tệ" value="2" />
              <Select.Item label="3-Trung bình" value="3" />
              <Select.Item label="4-Tốt" value="4" />
              <Select.Item label="5-Rất Tốt" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Viết đánh giá
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="Viết đánh giá vào đây nhé !"
              borderWidth={0}
              bg={Colors.backgroundLight}
              py={4}
              _focus={{
                bg:Colors.backgroundMedium,
                color:Colors.red
              }}
            ></TextArea>
          </FormControl>
          <Button bg={Colors.green} color={Colors.white} onPress={handelSubmitComment}>
              Hoàn tất
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
