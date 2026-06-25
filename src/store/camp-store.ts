import { Campaign } from '@/types/campaign';
import { create } from 'zustand';
import { backToSchoolPayload } from '@/data/school'
import { summerPlayhousePayload } from '@/data/summer'
import { mysteryGiftCarnivalPayload } from '@/data/mystery'

const CAMPAIGNS = [backToSchoolPayload, summerPlayhousePayload, mysteryGiftCarnivalPayload]
interface CampState {
  counter: number
  campaign: Campaign
  changeCampaign: () => void
}

export const useCampStore = create<CampState>((set,get) => ({
  counter: 0,
  campaign: backToSchoolPayload,
  changeCampaign: () => {
    const counter = get().counter
    const idx = (counter+1) % CAMPAIGNS.length
    set({ counter: idx})
    set({ campaign: CAMPAIGNS[idx]})
   
  }
}));