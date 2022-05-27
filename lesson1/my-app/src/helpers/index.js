

export const mapChatSnapShotToChat = (snapShot) => ({
    ...snapShot.val(),
    id: snapShot.key
})

