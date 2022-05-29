import ServiceFive from "pages/services/ServiceFive";
import ServiceFour from "pages/services/ServiceFour";
import ServiceOne from "pages/services/ServiceOne";
import ServiceThree from "pages/services/ServiceThree";
import ServiceTwo from "pages/services/ServiceTwo";

export const services = [
    { id: 1, title: 'Бухгалтерское и налоговое сопровождение (Аутсорсинг)', element: ServiceOne },
    { id: 2, title: 'Сдача налоговой отчётности', element: ServiceTwo },
    { id: 3, title: 'Восстоновление учёта', element: ServiceThree },
    { id: 4, title: 'Регистрация ТОО или ИП', element: ServiceFour},
    { id: 5, title: 'ПРИОСТАНОВЛЕНИЕ / ЛИКВИДАЦИЯ ТОО И ИП', element:ServiceFive},
]   