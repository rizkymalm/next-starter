enum TypeMessage {
    SUCCESSPOST = 'Success to create',
    FAILEDPOST = 'Failed to create',
    SUCCESSGET = 'Success to get data',
    FAILEDGET = 'Failed to get data',
}

export enum Messages {
    ACTIVITY_POST_SUCCESS = `${TypeMessage.SUCCESSPOST} activity`,
    ACTIVITY_POST_FAILED = `${TypeMessage.FAILEDPOST} activity`,
    LOGIN_SUCCESS = `Login Successful`,
    PASSWORD_NOT_MATCH = `Password not match! Please try again`,
    USER_NOT_FOUND = `User not found! Please try again`,
    SIGNUP_POST_SUCCESS = `${TypeMessage.SUCCESSPOST} New User`,
    SIGNUP_USER_EXIST = `${TypeMessage.FAILEDPOST} New User! User already exist`,
    SIGNUP_ROLE_NOT_FOUND = `${TypeMessage.FAILEDPOST} New User! Role note found`,
}
