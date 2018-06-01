import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Rent',
        amount: 20000,
        createdAt: 0,
        note: 'Cracow'
    }, {
        id: '2',
        description: 'Gas bill',
        amount: 3590,
        createdAt: moment(0).subtract(2, 'days').valueOf(),
        note: ''
    }, {
        id: '3',
        description: 'Tent',
        amount: 7499,
        createdAt: moment(0).add(2, 'days').valueOf(),
        note: 'eBay'
    }
];