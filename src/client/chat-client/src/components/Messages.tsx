/* eslint-disable @typescript-eslint/no-explicit-any */

interface MessageProps  {
    messages: any[]
}

const Messages = (props:MessageProps ) => {

    const renderMessages = props.messages.map((message: any[] ) => {
        return (
            <h3>{message}</h3>
        )
    })


    return (
        renderMessages
    )

}

export default Messages