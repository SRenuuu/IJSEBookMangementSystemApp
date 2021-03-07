import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Thumbnail, Button } from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
export default class AddBookScreen extends Component {
  render() {
    return (
      <Container>
         <Header>
            <Title style={styles.title}>Book Management System</Title>
        </Header>
        <Content style={styles.content}>
          <Text style={styles.text}>Add Book</Text>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Book No.</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.item}>
            <Label style={styles.label}>ISBN</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.item}>
            <Label style={styles.label}>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.item}>
            <Label style={styles.label}>Author</Label>
              <Input />
            </Item><Item floatingLabel style={styles.item}>
            <Label style={styles.label}>Description</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded success style={styles.btn}>
            <Text style={styles.btnText}>Add Book</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      padding:30,

    },
    item:{
        marginBottom: 10,
        paddingBottom: 8,
    },
    label:{
        fontSize: 21,
    },
    title:{
        marginTop: 12,
        textAlign:'center',
        fontSize: 24,
    },
    form:{
        marginTop: 20,
    },
    btn:{
        marginTop:20,
        marginBottom:10,
        paddingHorizontal:40,
        paddingVertical:30,
        alignSelf:'center',
    },
    btnText:{
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
    },
    thumbnail:{
        marginTop: 30,
        alignSelf:'center',

    },
    text:{
      textAlign: 'center',
      fontSize: 32,
    },
})