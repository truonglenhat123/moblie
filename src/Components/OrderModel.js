import React, { useState } from "react";
import {
  Button,
  Center,
  HStack,
  Modal,
  VStack,
  Text,
  Pressable,
  Image,
} from "native-base";
import { Colors } from "../Color";

const orderInfos = [
  {
    title: "Products",
    price: 122.22,
    color: "black",
  },
  {
    title: "Shipping",
    price: 3.22,
    color: "black",
  },
  {
    title: "Tax",
    price: 12.22,
    color: "black",
  },
  {
    title: "Tong cong",
    price: 12222.22,
    color: "green",
  },
];
const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Button
        onPress={() => setShowModel(true)}
        bg={Colors.green}
        color={Colors.white}
        mt={5}
        w="300px"
        h="50px"
        borderRadius={20}
        fontSize={20}
      >
        Tổng cọng
      </Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>DDjawt hang</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {orderInfos.map((i, index) => (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={index}
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "green" ? Colors.green : Colors.black}
                    bold
                    fontSize={15}
                  >
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.green}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setShowModel(false)}
              _pressed={{
                bg: Colors.green,
              }}
            >
              Dat hang ngay
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
