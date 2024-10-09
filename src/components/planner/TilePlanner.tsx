'use client';
import React from 'react';
import { useQueryState } from 'nuqs';
import DrawingInterface from './DrawingInterface';
import TileOptions, { TileOptionsType } from './TileOptions';

export default function TilePlanner() {
  const [drawingData, setDrawingData] = useQueryState('drawing', {
    parse: (value: string) => value,
    serialize: (value: string) => value,
  });

  const [tileOptions, setTileOptions] = useQueryState('options', {
    parse: (value: string) => JSON.parse(value) as TileOptionsType,
    serialize: (value: TileOptionsType) => JSON.stringify(value),
  });

  const handleDrawingUpdate = (data: string) => {
    setDrawingData(data);
  };

  const handleOptionsUpdate = (options: TileOptionsType) => {
    setTileOptions(options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DrawingInterface onDrawingUpdate={handleDrawingUpdate} />
      <TileOptions onOptionsUpdate={handleOptionsUpdate} />
      <div className="border p-4 rounded-lg col-span-full">
        <h2 className="text-xl font-semibold mb-2">Visualization</h2>
        {/* Visualization will be implemented here */}
        <pre className="text-sm overflow-auto">
          <code>
            Drawing Data: {drawingData}
            {'\n\n'}
            Tile Options: {JSON.stringify(tileOptions, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
