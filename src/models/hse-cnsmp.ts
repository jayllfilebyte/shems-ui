import Base from "./base";

/**
 * House Power Consumption Model
 */
export default class HseCnsmp extends Base {
  houseId: bigint;
  data: number;
  mainGridConsumeAmount: number;
  communityGridConsumeAmount: number;
  powerStorageConsumeAmount: number;
  solarPanelConsumeAmount: number;
  dateTime: Date;

  constructor(
    id: bigint,
    houseId: bigint,
    data: number,
    mainGridConsumeAmount: number,
    communityGridConsumeAmount: number,
    powerStorageConsumeAmount: number,
    solarPanelConsumeAmount: number,
    dateTime: Date,
    simulationTime: string,
  ) {
    super(id, simulationTime);
    this.houseId = houseId;
    this.data = data;
    this.mainGridConsumeAmount = mainGridConsumeAmount;
    this.communityGridConsumeAmount = communityGridConsumeAmount;
    this.powerStorageConsumeAmount = powerStorageConsumeAmount;
    this.solarPanelConsumeAmount = solarPanelConsumeAmount;
    this.dateTime = dateTime;
  }
}
