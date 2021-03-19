export const ChangeText = "text_change";

export const TextNew = title =>{
    return{
        type: ChangeText,
        title
    }
};