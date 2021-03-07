import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
  } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Book No.', 'ISBN', 'Name', 'Author'],
      tableData: [
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11', '12'],
        ['13', '14', '15', '16'],
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11', '12'],
        ['13', '14', '15', '16'],
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11', '12'],
        ['13', '14', '15', '16']
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
            <Title style={styles.title}>Book Management System</Title>
        </Header>
        <Content>
          <Text style={styles.mainText}>
            Details of books are displayed below.
          </Text>
          <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#bdc3c7'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Text style={styles.footerText}>Home</Text>
            </Button>
            <Button vertical>
              <Text style={styles.footerText}>Add Book</Text>
            </Button>
            <Button vertical>
              <Text style={styles.footerText}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    btnText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    title:{
        marginTop: 12,
        textAlign:'center',
        fontSize: 24,
    },

    mainText:{
      marginTop:10,
        padding:20,
        fontSize: 24,
    },

    footerText:{
        fontSize: 14,
    },
    container: { flex: 1, padding: 20, paddingTop: 10, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#bdc3c7' },
    text: { margin: 6, fontSize:18,}


})