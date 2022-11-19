import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import { Container, ToogleMode, Line, Item, Title, Img, IconCon, Desc, MobileContainer, Icon, ImgWrapper, TitleImg } from './AppStyle.js';
import img from './wbba.png';
import {ThemeContext} from './context'

const App =()=> {
  const [mode, setMode] = useState(false)
  const [theme , setTheme] = useContext(ThemeContext)

  const dark = {
    icon: 'black',
    title: 'black',
    background: 'white'
  }

  const Light = {
    icon: 'white',
    title: 'white',
    background: 'black'
  }

  const onChange=()=>{
    setMode(!mode)
    setTheme(mode? dark: Light)
  }
  // const [data, useData] = useState([
  //   {id: 1, name: 'Student'},
  //   {id: 2, name: 'Student'},
  //   {id: 3, name: 'Student'},
  //   {id: 4, name: 'Student'},
  //   {id: 5, name: 'Student'},
  //   {id: 6, name: 'Student'},
  // ]);// datani ishlatsak webbreinni opkiberadi
  // setData qiladigon bolsak yangi qiymat biriktiradi
  // useState boshlangich qiymat biriktir berish uchun
  // datalani boshqa bir komponintga propsiz yuborish imkonini beradi
  return (
      <Container color={theme.background}>
        <MobileContainer color={theme.background}>
      <IconCon>
          <Icon.Arrow color={theme.icon}/>
          <Icon.Switch color={theme.icon}/>
      </IconCon>
      <ImgWrapper>
            <Img src={img} alt="wbba logo"/>
            <TitleImg color={theme.title}>WebBrain</TitleImg>
            <Desc color={theme.title}>It school </Desc>
          </ImgWrapper>
          <Item>
            <Icon.Dark color={theme.icon}/>
            <Title color={theme.title}>Dark Mode</Title>
            <ToogleMode
              onChange={onChange}
              checked={mode}
              size={50}
            />
          </Item>
          <Item>
            <Icon.Grid/>
            <Title color={theme.title}>Story</Title>
          </Item>
          <Item>
            <Icon.User/>
            <Title color={theme.title}>Chat Head</Title>
          </Item>
          <Item>
            <Icon.UserPlus/>
            <Title color={theme.title}>Groups</Title>
          </Item>
          <Line/>
          <Item>
            <Icon.Perm/>
            <Title color={theme.title}>Media and Photos</Title>
          </Item>
          <Item>
            <Icon.Settings/>
            <Title color={theme.title}>Settings and privacy</Title>
          </Item>
          <Item>
            <Icon.Comment/>
            <Title color={theme.title}>Help centre</Title>
          </Item>
          <Item>
            <Icon.Bell/>
            <Title color={theme.title}>Notification</Title>
          </Item>
        </MobileContainer>
      </Container>
  );
}

export default App;






