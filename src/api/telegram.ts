const baseUrl = "https://api.telegram.org/bot7345261989:AAFYg7ug1wxj13v4I9CS2jy275S8JuRcRZk/";

export const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-1002397500608&text=${message}`;

    const response: Response = await fetch(url);

    if(!response.ok){
        const error = await response.json()

        await Promise.reject(error.description || 'something wrong :(');
    }
};
