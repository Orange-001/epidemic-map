export interface ChinaTotal {
	localConfirmAdd: number;
	nowSevere: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	nowLocalWzz: number;
	mRiskTime: string;
	showLocalConfirm: number;
	localConfirmH5: number;
	deadAdd: number;
	nowConfirm: number;
	mtime: string;
	confirm: number;
	heal: number;
	importedCase: number;
	confirmAdd: number;
	noInfectH5: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	localConfirm: number;
	dead: number;
	suspect: number;
	noInfect: number;
	showlocalinfeciton: number;
}

export interface ChinaAdd {
	localConfirmH5: number;
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	localConfirm: number;
	confirm: number;
	noInfect: number;
	noInfectH5: number;
}

export interface ShowAddSwitch {
	heal: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	localConfirm: boolean;
	all: boolean;
	suspect: boolean;
	dead: boolean;
	localinfeciton: boolean;
	confirm: boolean;
	importedCase: boolean;
	noInfect: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	heal: number;
	adcode: string;
	confirm: number;
	highRiskAreaNum: number;
	wzz: number;
	nowConfirm: number;
	dead: number;
	showRate: boolean;
	showHeal: boolean;
	mtime: string;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
}

export interface Today {
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
}

export interface Total {
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	provinceLocalConfirm: number;
	adcode: string;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroConfirm: number;
	nowConfirm: number;
	confirm: number;
	showRate: boolean;
	showHeal: boolean;
	mediumRiskAreaNum: number;
	heal: number;
	mtime: string;
}

export interface Total {
	continueDayZeroLocalConfirm: number;
	mtime: string;
	adcode: string;
	confirm: number;
	heal: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	showRate: boolean;
	showHeal: boolean;
	highRiskAreaNum: number;
	nowConfirm: number;
	wzz: number;
	dead: number;
	mediumRiskAreaNum: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Children {
	total: Total;
	name: string;
	adcode: string;
	date: string;
	today: Today;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
	nowConfirm: number;
	confirmAdd: number;
	confirm: number;
	grade: string;
	date: string;
	mtime: string;
	sdate: string;
	wzz_add: string;
	province: string;
	city: string;
	dead: number;
	heal: number;
	syear: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}
