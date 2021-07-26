interface Window {
  _is_jdsh_wkwebview?: string | number;
  webkit?: any;
  MobileNavi?: any;
  phoneBasicInfoCallback?: any;
  JDAppUnite?: any;
  getNaviHeight?: any;
  naviHeightInfoCallback?: any;
  statusBarInfoCallback?: any;
  MCommonHeaderBottom?: any;
  isWx?: boolean;
  MPing?: any;
  // $?: any;
  sameImageChecker: any;
  getJdEid?: any;
  getFingerPrint?: any;
  supportWebp?: boolean;
  homeADIds?: any;
  contentBISKUS?: any;
  couponTabs?: any;
  maleData?: any;
  femaleData?: any;
  NavHeight: number;
  androidConfigNaviCB: (jsonStr: string) => void;
  $: (s: any) => any;
  goToARStreet: (isJDApp: boolean) => void;
}
