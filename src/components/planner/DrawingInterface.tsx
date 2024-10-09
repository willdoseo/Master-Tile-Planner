'use client';
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

interface DrawingInterfaceProps {
  onDrawingUpdate: (data: string) => void;
}

export default function DrawingInterface({ onDrawingUpdate }: DrawingInterfaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        width: 500,
        height: 500,
        backgroundColor: '#f0f0f0',
      });

      const canvas = fabricCanvasRef.current;

      canvas.on('object:modified', () => {
        onDrawingUpdate(JSON.stringify(canvas.toJSON()));
      });

      return () => {
        canvas.dispose();
      };
    }
  }, [onDrawingUpdate]);

  const addRectangle = () => {
    if (fabricCanvasRef.current) {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 100,
        height: 100,
      });
      fabricCanvasRef.current.add(rect);
      fabricCanvasRef.current.renderAll();
    }
  };

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Drawing Interface</h2>
      <canvas ref={canvasRef} />
      <button 
        onClick={addRectangle}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Rectangle
      </button>
    </div>
  );
}
