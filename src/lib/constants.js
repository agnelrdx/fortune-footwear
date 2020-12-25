/* Initial app state */
export const initialAppData = {
  error: {
    status: false,
    msg: ''
  },
  stats: {
    salePerDay: 0,
    saleAmountPerDay: 0,
    stockLeft: 1000,
    lastSaleBrand: 'VKC',
    lastSaleSerialNo: '3121',
    lastSalePrice: '423.00'
  },
  initialRoute: 'Dashboard'
}

/* Pie chart dummy data @todo - GET from api */
export const pieData = [
  {
    name: 'VKC',
    sale: 10,
    color: '#ab47bc',
    legendFontColor: '#444',
    legendFontSize: 16
  },
  {
    name: 'BATA',
    sale: 20,
    color: '#9c27b0',
    legendFontColor: '#444',
    legendFontSize: 16
  },
  {
    name: 'NIKE',
    sale: 5,
    color: '#e1bee7',
    legendFontColor: '#444',
    legendFontSize: 16
  },
  {
    name: 'OTHERS',
    sale: 15,
    color: '#ba68c8',
    legendFontColor: '#444',
    legendFontSize: 16
  }
]

/* Graph dummy data @todo - GET from api */
export const saleGraphData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [2000, 7000, 10000, 8000, 5000, 4000],
      color: () => `#ab47bc`,
      strokeWidth: 2
    }
  ],
  legend: ['MONTHLY SALE AMOUNT (Rs.)']
}
