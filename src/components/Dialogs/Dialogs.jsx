import React from 'react';
import dialogs from './Dialogs.module.css';



const Dialogs = (props) => {

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <div className={dialogs.dialog + ' ' + dialogs.active}>
                    Dimych
                </div>

                <div className={dialogs.dialog}>
                    Andrey
                </div>
                <div className={dialogs.dialog} >
                    Sveta
                </div>
                <div className={dialogs.dialog}>
                    Sasha
                </div>
                <div className={dialogs.dialog}>
                    Viktor
                </div>
                <div className={dialogs.dialog}>
                    Valera
                </div>
            </div>

            <div className={dialogs.messages}>
                <div className={dialogs.message} >Hi</div>
                <div className={dialogs.message} >How is your it-React</div>
                <div className={dialogs.message} >Yo</div>

            </div>

        </div >
    )
}

export default Dialogs;