
export interface User {
    avatar: string;
    name: string;
    phone: string;
}

export interface CardData {
    title: string;
    avail: string;
    discount: string;
    share: string;
    remove: string;
}

export interface ChartData {
    availDate: string;
    statistics: string;
    dropList: { weekly: string; monthly: string; yearly: string };
    labels: string[];
}

export interface TableHeader {
    user: string;
    ticketNo: string;
    ticketValue: string;
    cinema: string;
    personals: string;
    purchaseCount: string;
    ticket: string;
}

export interface TableRow {
    cinemas: string[];
    numberOfPeople: number;
    purchaseCount: string;
    ticketLink: string;
    ticketNumber: string;
    ticketValue: string;
    user: User;
}

export interface TableData {
    ticketSale: string;
    search: string;
    switch: { on: string; off: string };
    newTicket: string;
    tickerNumberText: string;
    header: TableHeader[];
    users: TableRow[];
}

export interface DashboardData {
    edit: string;
    ticket: string;
}

export interface LanguageData {
    [key: string]: {
        card: CardData;
        chart: ChartData;
        dashboard: DashboardData;
        dir: string;
        table: TableData;
    };
    ar: {
        card: CardData;
        chart: ChartData;
        dashboard: DashboardData;
        dir: string;
        table: TableData;
    };
    en: {
        card: CardData;
        chart: ChartData;
        dashboard: DashboardData;
        dir: string;
        table: TableData;
    };
}

export interface LanguageDataObj {
    dir: string;
    card: CardData;
    chart: ChartData;
    table: TableData;
    dashboard: DashboardData;
}


