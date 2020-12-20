import Header from '../components/Header'

// Initial App state //
export const initialAppData = {
  error: {
    status: false,
    msg: ''
  },
  listLoading: false,
  list: []
}

// Screen header styles //
export const headerStyle = {
  headerStyle: {
    backgroundColor: '#fff'
  },
  headerTintColor: '#444',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 18
  },
  headerLeft: Header,
  headerLeftContainerStyle: {
    paddingLeft: 10,
    marginTop: 3
  }
}
