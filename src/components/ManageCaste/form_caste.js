import { Content, List, ListItem, Text, Container } from "native-base";
import React from "react";

const CasteForm = props => {
  const { castes } = props;
  const { data } = castes;

  return (
    <Container>
      <Content>
        <List
          dataArray={data}
          renderRow={item => {
            return (
              <ListItem>
                <Text>
                  hello
                </Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default CasteForm;
