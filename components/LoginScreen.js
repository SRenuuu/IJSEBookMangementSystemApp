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
export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
         <Header>
            <Title style={styles.title}>Book Management System</Title>
        </Header>
        <Content style={styles.content}>
        <Thumbnail style={styles.thumbnail} large source={{uri: 'https://icon-library.com/images/562132.png'}}/>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.item}>
            <Label style={styles.label}>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button rounded success style={styles.btn}>
            <Text style={styles.btnText}>Sign in</Text>
          </Button>
          <Button rounded info style={styles.btn}>
            <Text style={styles.btnText}>Sign in with Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      padding:50,

    },
    item:{
        marginBottom: 50,
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
        marginTop: 60,
    },
    btn:{
        marginTop:30,
        marginBottom:10,
        paddingHorizontal:40,
        paddingVertical:30,
        alignSelf:'center',
    },
    btnText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    thumbnail:{
        marginTop: 30,
        alignSelf:'center',

    }
})