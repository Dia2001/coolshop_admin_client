import { useState, createContext, useEffect } from 'react';
import ProductService from '../services/ProductService';

const DashboardContext = createContext()

function DashboardContextProvider({ children }) {
  const yearOld = 2021
  const [listYearChoise, setListYearChoise] = useState([])
  const [statisticType, setStatisticType] = useState("month")
  const [statisticChoise, setStatisticChoise] = useState({
    month: (new Date()).getMonth() + 1,
    year: (new Date()).getFullYear()
  })
  const [statistics, setStatistics] = useState({
    turnover: [],
    order: [],
    label: [],
    num: 0
  })

  useEffect(() => {
    setListYearChoise(setupListYearChoise())
    fetchStatistics()
  }, [])

  const fetchStatistics = async (type) => {
    let typeTmp = type || statisticType
    let result
    if (typeTmp === "month") {
      result = await ProductService.revenuemonth(statisticChoise)
    } else {
      result = await ProductService.revenuemonthly(statisticChoise)
    }

    if (result && result.success) {
      setStatistics(result.data)
      return true
    }
    return false
  }

  const setupListYearChoise = () => {
    const currentYear = (new Date()).getFullYear()
    const listYearChoiseTmp = []
    for (let y = yearOld; y <= currentYear; y++) {
      listYearChoiseTmp.push(y)
    }
    return listYearChoiseTmp
  }

  return (
    <DashboardContext.Provider value={{
      statisticType,
      setStatisticType,
      listYearChoise,
      statisticChoise,
      setStatisticChoise,
      statistics,
      setStatistics,
      fetchStatistics
    }}>
      {children}
    </DashboardContext.Provider>
  )
}

export { DashboardContext, DashboardContextProvider }
