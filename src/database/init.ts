import Config from '@/config';
import mongoose from 'mongoose';
import * as dns from 'dns';

export async function initDB() {
  try {
    dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
  } catch {}
  await mongoose.connect(Config.MONGODB_URI);
}
