using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RobotArmy.Migrations
{
    public partial class TrainingExercises : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Exercises",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false)
                        .Annotation("Npgsql:ValueGeneratedOnAdd", true),
                    Name = table.Column<string>(nullable: true),
                    PointThreshold = table.Column<int>(nullable: false),
                    PointValue = table.Column<int>(nullable: false),
                    Sequence = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exercises", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Training",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGeneratedOnAdd", true),
                    Completed = table.Column<DateTime>(nullable: false),
                    OwnerId = table.Column<string>(nullable: true),
                    TaskId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Training", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Training_AspNetUsers_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Training_Exercises_TaskId",
                        column: x => x.TaskId,
                        principalTable: "Exercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Training_OwnerId",
                table: "Training",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Training_TaskId",
                table: "Training",
                column: "TaskId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Training");

            migrationBuilder.DropTable(
                name: "Exercises");
        }
    }
}
