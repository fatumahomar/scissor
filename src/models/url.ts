import { Schema, model, Document } from 'mongoose';

interface ILink extends Document {
    url: string;
    shortUrl: string;
    userId: string;
    createdAt: Date;
    lastUsed: Date | null;
    totalHits: number;
    qrCodeId: string | null;
    customDomain: string | null;
    origin:  string[];
}

const linkSchema = new Schema<ILink>({
    url: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    lastUsed: { type: Date, default: null },
    totalHits: { type: Number, default: 0 },
    qrCodeId: { type: String, default: null },
    customDomain: { type: String, default: null },
    origin: { type: [String] }
});

const LinkModel = model<ILink>('Link', linkSchema);

export default LinkModel;
