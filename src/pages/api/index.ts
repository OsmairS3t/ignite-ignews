import { NextApiRequest, NextApiResponse } from 'next';

export default (request, response) => {
    const users = [
        { id: 1, name: 'Osmair' },
        { id: 2, name: 'Moreira' },
        { id: 3, name: 'Araujo' },
    ]
    return response.json(users)
}
