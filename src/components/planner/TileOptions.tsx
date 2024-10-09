'use client';

import React, { useState } from 'react';

interface TileOptionsProps {
  onOptionsUpdate: (options: TileOptionsType) => void;
}

export interface TileOptionsType {
  tileSize: { width: number; height: number };
  groutWidth: number;
  pattern: string;
}

export default function TileOptions({ onOptionsUpdate }: TileOptionsProps) {
  const [tileWidth, setTileWidth] = useState(10);
  const [tileHeight, setTileHeight] = useState(10);
  const [groutWidth, setGroutWidth] = useState(0.25);
  const [pattern, setPattern] = useState('grid');

  const handleUpdate = () => {
    onOptionsUpdate({
      tileSize: { width: tileWidth, height: tileHeight },
      groutWidth,
      pattern,
    });
  };

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Tile Options</h2>
      <div className="space-y-4">
        <div>
          <label className="block">Tile Width (inches)</label>
          <input
            type="number"
            value={tileWidth}
            onChange={(e) => setTileWidth(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block">Tile Height (inches)</label>
          <input
            type="number"
            value={tileHeight}
            onChange={(e) => setTileHeight(Number(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block">Grout Width (inches)</label>
          <input
            type="number"
            value={groutWidth}
            onChange={(e) => setGroutWidth(Number(e.target.value))}
            className="border rounded px-2 py-1"
            step="0.125"
          />
        </div>
        <div>
          <label className="block">Pattern</label>
          <select
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="grid">Grid</option>
            <option value="brick">Brick</option>
            <option value="herringbone">Herringbone</option>
          </select>
        </div>
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Options
        </button>
      </div>
    </div>
  );
}
