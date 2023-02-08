import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
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
import { ActivityIndicator } from "react-native";

const Review = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkIsComment, setCheckIsComment] = useState(false);
  const [rating, setRating] = useState("");
  useEffect(() => {
    getComment();
    return () => {};
  });
  const getComment = () => {
    const apiURL = "http://192.168.1.50:8083/api/Comment";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        setCheckIsComment(true);
        // console.log("data", data);
      })
      .catch((error) => {
        console.log("errorr", error);
      })
      .finally(() => setIsLoading(false));
  };
  const handelSubmitComment = () => {
    alert("aaa");
  };
  const renderComment = () => {
    return (
      <>
        {data.map((products) => (
          <Box p={5} bg={Colors.green} mt={5} rounded={5} key={products.productId}>
            <>
              <Heading fontSize={15} color={Colors.black} p={1}>
                {products.name}
              </Heading>
              <Text my={3} fontSize={11} p={1}>
                {products.createAt}
              </Text>
              <Message
                bold
                mt={3}
                color={Colors.black}
                bg={Colors.white}
                size={10}
                children={`${products.content}`}
              />
            </>
          </Box>
        ))}
      </>
    );
  };
  const noComment = () => {
    return (
      <Message
        mt={3}
        color={Colors.green}
        bg={Colors.backgroundDark}
        size={10}
        bold
        children={"Không có đánh giá nào"}
      />
    );
  };
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Đánh giá
      </Heading>

     
      {checkIsComment ? renderComment() : noComment()}
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
                bg: Colors.backgroundMedium,
                color: Colors.red,
              }}
            ></TextArea>
          </FormControl>
          <Button
            bg={Colors.greenss}
            color={Colors.white}
            onPress={handelSubmitComment}
          >
            Hoàn tất
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
