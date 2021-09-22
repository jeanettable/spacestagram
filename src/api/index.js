export const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

// intended to be called with baseURL:
export async function fetchImages(url, count = 12, options) {
    // if dates not selected, and options object not passed in:
        console.log('get images fetch hit!');
        const response = await fetch(`${url}&count=${count}`);
        console.log('response>>>', response);
        const data = await response.json();
        console.log('data>>>', data);
        return data;
}

// intended for use with a date-picker
export async function fetchImagesByDate(url, options) {
        const { start_date, end_date } = options;
        const dateURL = `${url}&start_date=${start_date}&end_date=${end_date}`;
        const response = await fetch(dateURL);
        const data = await response.json();
        console.log('data>>>', data);
        return data;
};
