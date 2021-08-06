import React from 'react';
import './MailBox.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useParams } from 'react-router-dom';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function MailBox() {

    const {roomId}=useParams();

    return (
        <div className="mailbox">

            <div className="mailbox__header">

                <div className="mailbox__headerLeft">

                     <h4 className="mailboxHeader__name">Mail Box</h4>
                </div>
                <div className="mailbox__headerRight">

                    <InfoOutlinedIcon />
                    <p>Details</p>

                </div>
               
            </div>
            <div className="mailbox__chat">
                
                <h1>Chatting Goes Here.....</h1>
                
                
            </div>


        <div className="message__box">




            <div className="mailbox__chatBox">
                <div className="mailbox__chatBoxInput">
                   
                         <input type="text" placeholder="Enter Your Message Here..." />
                    
                </div>
                <hr />
                <div className="mailbox__chatBoxTools">

                    <div className="mailbox__chatBoxToolsLeft">

                         <FormatBoldIcon />
                         <FormatItalicIcon />
                         <FormatListNumberedIcon />
                        <FormatColorTextIcon />

                    </div>
                    <div className="mailbox__chatBoxToolsRight">

                                <AlternateEmailIcon />
                                <EmojiEmotionsIcon />
                                <AttachFileIcon />
                    </div>
                    
                </div>
            </div>
            

            <button>Send</button>

        </div>
           
        </div>
    )
}

export default MailBox
