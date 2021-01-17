using Microsoft.EntityFrameworkCore.Migrations;

namespace AdminAPI.Migrations
{
    public partial class AddIsApproveColumnInMEssageTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isApprove",
                table: "Messages",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isApprove",
                table: "Messages");
        }
    }
}
