import styled, {css} from "styled-components";
import {Settings} from '@styled-icons/evaicons-solid/Settings'
import {KeyboardArrowLeft} from '@styled-icons/material-rounded/KeyboardArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {Moon} from '@styled-icons/evaicons-solid/Moon'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {Bell} from '@styled-icons/boxicons-solid/Bell'

import  Toogle from 'react-dark-mode-toggle'

export const ToogleMode = styled(Toogle)`
margin-left: auto;
outline: none;
`


export const Container = styled.div`
dispay: flex;
justify-content: center;
align-items: center;
width: 100vh;
height: fit-content;
padding: 50px 650px;
box-sizing: border-box;

`

export const MobileContainer = styled.div`
width: 400px;
box-sizing: border-box;
height: 700px;
backgound: whitesmoke;
box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
background: ${({color})=> color};
`

export const IconCon = styled.div`
display: flex;
width: 100%;
padding: 20px;
box-sizing: border-box;
`

export const Icon = styled.div`

`

Icon.Arrow = styled(KeyboardArrowLeft)`
color: ${({color})=> color};
width: 30px;
height: 30px;
cursor: pointer;
`

Icon.Switch = styled(Switch)`
color: ${({color})=> color};
width: 20px;
height: 20px;
cursor: pointer;
margin-left: auto;
`

export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Img = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
margin: 10px;
border: .5px solid #000;
`

export const TitleImg = styled.div`
font-size: 22px;
font-style: bold;
font-family: SF Pro Display;
color: ${({color})=> color};
`

export const Desc = styled.div`
font-size: 15px;
font-style: bold;
font-family: SF Pro Display;
color: ${({color})=> color};
`

export const Item = styled.div`
display: flex;
padding: 15px 30px;

`

export const Title = styled.div`
font-size: 17px;
font-style: bold;
font-family: SF Pro Display;
padding-left: 10px;
vertical-align: middle;
color: ${({color})=> color};
`

export const Line = styled.div`
width: 85px;
height: 1px;
background: #E9E9E9;
margin: 10px 30px;
box-sizing: border-box;

`

Icon.Dark = styled(Moon)`
width: 25px;
height: 25px;
// color: black;
color: ${({color})=> color};
`

Icon.Grid = styled(Grid)`
width: 25px;
height: 25px;
color: #FBB65C;
`

Icon.User = styled(UserCheck)`
width: 25px;
height: 25px;
color: #FF7EB0;
`

Icon.UserPlus = styled(UserPlus)`
width: 25px;
height: 25px;
color: #FBB65C;
`

Icon.Perm = styled(PermMedia)`
width: 25px;
height: 25px;
color: #5476FF;
`

Icon.Settings = styled(Settings)`
width: 25px;
height: 25px;
color: #5476FF;
`


Icon.Comment = styled(CommentDots)`
width: 25px;
height: 25px;
color: #5476FF;
`


Icon.Bell = styled(Bell)`
width: 25px;
height: 25px;
color: #5476FF;
`