export interface Ui {
    }
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
    ticketNumber: string;
    ticketValue: string;
    cinemas: string[];
    numberOfPeople: number;
    purchaseCount: string;
    ticketLink: string;
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
    ar: {
        dir: string;
        card: CardData;
        chart: ChartData;
        table: TableData;
        dashboard: DashboardData;
        },
    en: {
        dir: string;
        card: CardData;
        chart: ChartData;
        table: TableData;
        dashboard: DashboardData;
        },
    }

export interface LanguageContent {
    [key: string]: LanguageData;
    }
